import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  outer: {
    paddingTop: 5,
  },
  attributeSelector: {
    flex: 1,
    flexDirection: 'row',
  },
  attributeButton: {
    // flex: 1,
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 15,
  },
  attributeButtonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  marker: {
    width: 20,
    height: 2,
    bottom: -7,
    position: 'absolute',
    backgroundColor: '#000',
  },
});
export default styles;
