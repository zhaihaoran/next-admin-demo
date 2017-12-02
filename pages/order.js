import Layout from "@comps/Layout/admin";
import commonScss from "@style/scss/admin.common.scss";

// context
import ShipmentsPage from "@comps/Admin/ShipmentsPage";

export default props => (
    <Layout>
        <style dangerouslySetInnerHTML={{ __html: commonScss }} />
        <ShipmentsPage />
    </Layout>
);
