import React from 'react';
import Link from 'next/link';
import Layout from '@comps/Head/sign';
import Login from '@comps/Front/Login';

export default params => {
	return (
		<Layout>
			<Login />
		</Layout>
	);
};
