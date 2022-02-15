import React from 'react';

function index() {
  export async function getStaticProps() {
    const API = '';
    const res = await Axios.get();
    const data = res.data;

    return {
      props: {},
    };
  }
  return <div>index</div>;
}

export default index;
