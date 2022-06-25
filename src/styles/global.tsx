import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320D51',
    padding: 20,
  },
  reviewsContainer: {
    paddingTop: 10,
    paddingBot: 10,
    marginBottom: 50,
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

  // Review cards
  reviewCardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#613070',
    marginTop: 10,
    marginBop: 10,
    height: 100,
    padding: 7,
    borderRadius: 10,
  },
  reviewCardImage: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  reviewCardContent: {
    flex: 1,
    padding: 0,
    marginLeft: 10,
    marginBottom: 0,
  },
  reviewCardCategory: {
    color: '#F7DC6F',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  reviewCardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  authorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  reviewCardAuthor: {
    color: '#D2C5B6',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  // Review details containers
  reviewDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  reviewDetailsInfoContainer: {
    padding: 10,
  },
  reviewDetailsImageContainer: {
    flex: 1,
    borderRadius: 20,
  },
  reviewDetailsContentContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },

  // Review details items
  reviewDetailsTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
  },
  reviewDetailsCategory: {
    color: '#F7DC6F',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  reviewDetailsAuthor: {
    color: '#D2C5B6',
    alignSelf: 'baseline',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  reviewDetailsCardImage: {
    width: '30%',
    height: '100%',
  },
  reviewDetailsDescriptionText: {
    fontSize: 18,
    color: '#E2ECEC',
    letterSpacing: 1,
    textAlign: 'left',
    marginBottom: 20,
    opacity: 0.8,
  },
});

export default globalStyles;
