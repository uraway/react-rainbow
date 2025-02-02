import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../Table';
import Column from '../../Column';
import getPreviewDataToImport from '../helpers/getPreviewDataToImport';

export default function StepFour(props) {
    const { schemaFields, data, fieldsMap, attributes } = props;
    const previewData = getPreviewDataToImport(data.slice(0, 5), fieldsMap, attributes);

    return (
        <Table className="rainbow-import-records-flow_table" keyField="id" data={previewData}>
            {schemaFields.map((field, index) => {
                const key = `column-${index}`;
                return <Column key={key} header={field} field={field} />;
            })}
        </Table>
    );
}

StepFour.propTypes = {
    schemaFields: PropTypes.array,
    data: PropTypes.array,
    fieldsMap: PropTypes.object,
    attributes: PropTypes.object,
};

StepFour.defaultProps = {
    schemaFields: [],
    data: [],
    fieldsMap: {},
    attributes: {},
};
