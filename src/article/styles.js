import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
  fold: {
    height: height,
    width: width,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  heroImage: {
    width: width,
    height: height,
    resizeMode: 'cover',
    opacity: 0.6,
  },
  foldContent: {
    position: 'absolute',
    paddingVertical: 80,
    paddingLeft: 40,
    paddingRight: 60,
  },
  published: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    width: 30,
    height: 2,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 52,
    fontWeight: '900',
  },
  summary: {
    marginTop: 10,
    color: '#fff',
    lineHeight: 22,
    fontSize: 16,
  },
});

export default styles;
