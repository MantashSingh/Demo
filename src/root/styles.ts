import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container1: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  container2: {
    width: 100,
    height: 100,
    margin: 20,
    backgroundColor: 'red',
    alignSelf: 'center',
    position: 'absolute',
    top: 100,
    left: 100,
    zIndex: 3,
  },
});

export default styles;
