// components
import Wrapper from "@comps/Head/Common";
import Layout from "@comps/Admin/Layout";

import commonScss from "@style/scss/admin.common.scss";

export default props => (
    <Wrapper>
        <style dangerouslySetInnerHTML={{ __html: commonScss }} />
        <Layout />
    </Wrapper>
);
