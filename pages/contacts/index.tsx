import React from 'react';
import axios from 'axios';

function index() {
  // export Async function getStaticProps() {
    const API = '';
    const res = await axios.get(API);
    const data = res.data;

    return {
      props: {},
    };
  }
  return <div>index</div>;
}

export default index;
