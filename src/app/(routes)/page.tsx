'use client';

// components
import HomeTemplate from '../_components/templates/homeTemplate/homeTemplate';
// helpers
import withDataFetching from '../_helpers/WithDataFetching';

const Home = withDataFetching(HomeTemplate);

export default Home;
