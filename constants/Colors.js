const tintColor = '#0B2A4F'

const calender = {
  calenderBorder: '#ffffff1f',
  calenderBackground: '#3C5C82',
  calenderStyle: '#9CADC1',
  calenderHighlight: 'white',
  calenderDisabled: 'white',
}

const navigation = {
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
}

export default {
  tintColor,
  ...calender,
  ...navigation,
  homeBackground: 'white',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
}
