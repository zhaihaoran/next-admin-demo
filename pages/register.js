import React from "react";
import Link from "next/link";
import Layout from "@comps/Head/sign";
import Register from "@comps/Front/Register";

export default params => {
	return (
		<Layout>
			<Register />
		</Layout>
	);
};
