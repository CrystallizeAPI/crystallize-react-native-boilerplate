import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    flex: 1,
    height: 250,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    flex: 1,
    padding: 20,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  overlayText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default styles;
