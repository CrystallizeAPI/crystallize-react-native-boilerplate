import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const buyBtnSize = 60;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    height: 1000,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  image: {
    width: width,
    height: 350,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginTop: -10,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  summary: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  buyBtn: {
    backgroundColor: '#000',
    width: buyBtnSize + 20,
    height: buyBtnSize,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  buyIcon: {
    width: buyBtnSize,
    height: buyBtnSize,
  },
  price: {
    fontSize: 20,
    fontWeight: '900',
  },
  priceLabel: {
    flex: 1,
    paddingRight: 30,
    justifyContent: 'center',
  },
  sku: {
    opacity: 0.6,
    fontSize: 12,
  },

  actions: {
    position: 'absolute',
    width: width,
    bottom: 0,
    backgroundColor: '#fff',
    paddingBottom: 40,
    paddingLeft: 40,
    paddingTop: 20,
    marginVertical: 0,
    flexDirection: 'row',
    right: 0,
    // marginHorizontal: 40,
    borderRadius: 4,
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default styles;
