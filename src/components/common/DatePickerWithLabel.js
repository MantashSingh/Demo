import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import commonStyles from '../../styles/commonStyles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePickerWithLabel = ({
  label,
  placeHolder,
  marginBottom,
  onDateChange,
  isDob = true,
  date = null,
  minDate = false,
  rightImg = false,
  inputStyle,
  mode = 'time',
  headerText,
}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    // alert()
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    if (mode === 'time') {
      let time = moment(date).format('HH:mm');
      // moment(time).format("HH:mm")
      setSelectedDate(time);
      onDateChange(time);
      // alert(time)
      hideDatePicker();
      // console.log('this is date with time', time);
    } else {
      const newDdate = moment(date).format('YYYY-MM-D');
      // console.log("A date has been picked: ", newDdate);
      setSelectedDate(newDdate);
      onDateChange(newDdate);
      hideDatePicker();
    }
  };
  return (
    <View style={{marginBottom: marginBottom, ...styles.container}}>
      <TouchableOpacity
        onPress={showDatePicker}
        style={{
          ...styles.inputStyle,
          ...inputStyle,
          backgroundColor: colors.whiteF2,
        }}
        activeOpacity={0.8}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              fontFamily: fontFamily.regular,
              fontSize: textScale(16),
              textAlign: 'left',
              opacity: 0.9,
              color: selectedDate == null ? 'grey' : 'black',
              right: moderateScale(5),
              top: 3,
            }}>
            {selectedDate == null ? placeHolder : selectedDate}
          </Text>

          {isDatePickerVisible && (
            <DateTimePickerModal
              maximumDate={isDob ? new Date(2250, 12) : null}
              minimumDate={minDate ? new Date() : null}
              isVisible={isDatePickerVisible}
              mode={mode}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              headerTextIOS={headerText}
              is24Hour={true}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteF2,
    borderRadius: 12,
    paddingHorizontal: moderateScale(4),
    marginBottom: moderateScaleVertical(16),
    flexDirection: 'row',
    height: moderateScaleVertical(56),
  },
  inputStyle: {
    flex: 1,

    // opacity: 0.7,
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    paddingHorizontal: 10,

    backgroundColor: colors.whiteF2,
    borderRadius: 16,
    justifyContent: 'center',
    height: moderateScaleVertical(56),
  },
  rightImg: {
    width: 20,
    height: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default DatePickerWithLabel;
