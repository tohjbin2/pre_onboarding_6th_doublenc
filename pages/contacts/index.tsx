import React from 'react';
import axios from 'axios';

export async function getStaticProps() {
  const API = '';
  const res = await axios.get(API);
  const data = res.data;

  return {
    props: {},
  };
}

function index() {
  return <div>index</div>;
}

export default index;
