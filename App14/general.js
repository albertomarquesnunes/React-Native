
import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    margin:metrics.baseMargin,
    fontSize: 50,
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;