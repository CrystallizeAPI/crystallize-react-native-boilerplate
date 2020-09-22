import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 8,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  searchAction: {
    width: 60,
    height: 60,
    padding: 15,
    marginRight: 20,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  header: {
    paddingTop: 100,
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default styles;
