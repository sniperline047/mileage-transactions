import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Text, Snackbar, Caption } from 'react-native-paper'
import { Header } from '../components'
import { default as s } from '../theme/Styles'
import { Colors as c } from '../theme/Theme'
import { MaterialIcons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { formatISO } from 'date-fns'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../store/actions'

function isValidNumber(value) {
  return (
    value.length > 0 && typeof Number(value) === 'number' && isFinite(value)
  )
}

const AddOrEdit = ({ navigation }) => {
  const dispatch = useDispatch()
  let trxns = useSelector((state) => state.transactions)

  const [odometer, setOdometer] = useState('')
  const [gas, setGas] = useState('')
  const [type, setType] = useState('0')
  const [ppl, setPpl] = useState('')
  const [createdAt, setCreatedAt] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [save, setSave] = useState(false)
  const [totalPrice, setTotalPrice] = useState('0')
  const [visible, setVisible] = React.useState(false)

  const onToggleSnackBar = () => setVisible(!visible)

  const onDismissSnackBar = () => setVisible(false)

  const goBack = () => navigation.goBack()

  const handleSave = () => {
    if (!save) return

    let payload = {
      odometer: Number(odometer),
      gas: Number(gas),
      type: parseInt(type),
      ppl: Number(ppl),
      createdAt: createdAt.toISOString(),
    }
    onToggleSnackBar()
    dispatch(addExpense(payload))
    resetState()
  }

  const setDateTime = (_e, selectedDate) => {
    const currentDate = selectedDate || createdAt
    setShowDate(false)
    setShowTime(false)
    setCreatedAt(currentDate)
  }

  const resetState = () => {
    setOdometer('')
    setGas('')
    setType('0')
    setPpl('')
    setCreatedAt(new Date())
    setShowDate(false)
    setShowTime(false)
    setSave(false)
    setTotalPrice('0')
  }

  useEffect(() => {
    setTotalPrice(ppl * gas)
    if (
      isValidNumber(ppl) &&
      isValidNumber(gas) &&
      isValidNumber(odometer) &&
      Number(odometer) > trxns[0].odometer
    )
      setSave(true)
    else setSave(false)
  }, [ppl, odometer, type, createdAt, gas])

  return (
    <View style={s.baseContainer}>
      <Header
        headerTitle="Add Expense"
        goBack={goBack}
        disabled={!save}
        handleSave={handleSave}
      />
      <View style={[{ margin: 12 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.flexCenter}>
            <View style={[s.formContainer, { marginBottom: 0 }]}>
              <MaterialIcons name="speed" size={30} color={c.light} />
              <TextInput
                style={s.customInput}
                placeholder="Odometer (mi)"
                value={odometer}
                onChangeText={(text) => setOdometer(text)}
                placeholderTextColor={c.secondary}
                keyboardType="numeric"
              />
            </View>
            <Caption
              style={{
                alignSelf: 'flex-start',
                marginBottom: 2,
                marginLeft: 48,
                fontSize: 8,
              }}>{`Last reading was ${trxns[0].odometer} mi`}</Caption>
            <View style={s.formContainer}>
              <MaterialIcons
                name="local-gas-station"
                size={30}
                color={c.light}
              />
              <TextInput
                style={s.customInput}
                placeholder="Gas (l)"
                value={gas}
                onChangeText={(text) => setGas(text)}
                placeholderTextColor={c.secondary}
                keyboardType="numeric"
              />
              <View style={s.customPicker}>
                <Picker
                  style={{ color: c.primary }}
                  selectedValue={type}
                  onValueChange={(itemValue) => setType(itemValue)}>
                  <Picker.Item label="Regular" value="0" />
                  <Picker.Item label="Premium" value="1" />
                </Picker>
              </View>
            </View>
            <View style={s.formContainer}>
              <MaterialIcons name="money" size={30} color={c.light} />
              <TextInput
                style={s.customInput}
                placeholder="Price/L"
                value={ppl}
                onChangeText={setPpl}
                placeholderTextColor={c.secondary}
                keyboardType="numeric"
              />
              <TouchableOpacity style={s.customInput}>
                <Text>{totalPrice.toString()}</Text>
              </TouchableOpacity>
            </View>
            <View style={s.formContainer}>
              <MaterialIcons name="event" size={30} color={c.light} />
              <TouchableOpacity
                style={s.customInput}
                onPress={() => setShowDate(true)}>
                <Text>{formatISO(createdAt, { representation: 'date' })}</Text>
              </TouchableOpacity>
              {showDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={createdAt}
                  mode="date"
                  display="default"
                  onChange={setDateTime}
                />
              )}
              <TouchableOpacity
                style={s.customInput}
                onPress={() => setShowTime(true)}>
                <Text>{formatISO(createdAt, { representation: 'time' })}</Text>
              </TouchableOpacity>
              {showTime && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={createdAt}
                  mode="time"
                  display="default"
                  onChange={setDateTime}
                />
              )}
            </View>
          </View>
          <Snackbar
            style={{ backgroundColor: c.light, color: c.light }}
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Ok',
              onPress: () => {
                navigation.navigate('Home')
              },
            }}>
            Expense Added Successfully.
          </Snackbar>
        </ScrollView>
      </View>
    </View>
  )
}

AddOrEdit.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AddOrEdit
