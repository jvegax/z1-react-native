import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320D51',
    padding: 20,
  },
  lessonContainer: {
    paddingTop: 10,
    paddingBot: 10,
    marginBottom: 100,
  },

  // Category menu
  categoryMenuContainer: {
    height: 50,
  },
  categoryMenuText: {
    alignSelf: 'flex-start',
    color: '#fff',
    padding: 10,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    backgroundColor: '#AA7CAA',
    borderRadius: 10,
    marginRight: 10,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  // lesson cards
  lessonCardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#613070',
    marginTop: 10,
    marginBop: 10,
    height: 100,
    padding: 7,
    borderRadius: 10,
  },
  lessonCardImage: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  lessonCardContent: {
    flex: 1,
    padding: 0,
    marginLeft: 10,
    marginBottom: 0,
  },
  lessonCardCategory: {
    color: '#F7DC6F',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lessonCardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  authorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  lessonCardAuthor: {
    color: '#D2C5B6',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // lesson details containers
  lessonDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  lessonDetailsInfoContainer: {
    padding: 10,
  },
  lessonDetailsImageContainer: {
    flex: 1,
    borderRadius: 20,
  },
  lessonDetailsContentContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },

  // lesson details items
  lessonDetailsTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
  },
  lessonDetailsCategory: {
    color: '#F7DC6F',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  lessonDetailsAuthor: {
    color: '#D2C5B6',
    alignSelf: 'baseline',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  lessonDetailsCardImage: {
    width: '30%',
    height: '100%',
  },
  lessonDetailsDescriptionText: {
    fontSize: 18,
    color: '#E2ECEC',
    letterSpacing: 1,
    textAlign: 'left',
    marginBottom: 20,
    opacity: 0.8,
  },
});

export default globalStyles;
