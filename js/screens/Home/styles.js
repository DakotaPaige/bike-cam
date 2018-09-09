import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentBlock: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  activity: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3FD0AE',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  content: {
    height: '100%'
  },
  lastTripInfo: {
    flexDirection: 'row'
  },
  tripInfo: {
    height: 200,
    width: '90%',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2
  },
  tripInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: 'white'
  },
  innerText: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 135,
    height: 135
  },
  percentage: {
    fontSize: 30
  }
});

export default styles;
