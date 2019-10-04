import * as React from "react";
import PropTypes from "prop-types";
import { getClient } from "../../common/contentful";
import Page from "../../components/page";
import Section from "../../components/section/section";

class Index extends React.Component {
  render() {
    const locale = this.props.url.query.locale;
    const { fields } = this.props.data;
    return (
      <Page fields={fields} locale={locale}>
        {fields.sections.map(section => (
          <Section fields={section.fields} locale={locale} />
        ))}
      </Page>
    );
  }
}

Index.getInitialProps = async req => {
  const client = getClient();
  const entries = await client.getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 4,
  });
  return { data: entries.items[0] };
};

Index.propTypes = {
  data: PropTypes.object
};

export default Index;
