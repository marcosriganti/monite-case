'use server';

import {redirect} from 'next/navigation';

const Home = async () => {
  redirect('/products');
};

export default Home;
