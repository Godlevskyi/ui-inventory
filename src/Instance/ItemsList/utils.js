import {
  orderBy,
} from 'lodash';

const sorters = {
  'barcode': ({ barcode }) => barcode,
  'status': ({ status }) => status.name.toLowerCase(),
  'copyNumber': ({ copyNumber }) => copyNumber?.toLowerCase(),
  'materialType': ({ materialType }) => materialType.name.toLowerCase(),
  'loanType': (item) => item.temporaryLoanType?.name?.toLowerCase() || item.permanentLoanType?.name?.toLowerCase(),
  'effectiveLocation': ({ effectiveLocation }) => effectiveLocation.name.toLowerCase(),
  'enumeration': ({ enumeration }) => enumeration,
  'chronology': ({ chronology }) => chronology,
  'volume': ({ volume }) => volume,
  'yearCaption': ({ yearCaption }) => yearCaption,
};

// eslint-disable-next-line
export const sortItems = (items, sorting) => orderBy(
  items, sorters[sorting.column], sorting.isDesc ? 'desc' : 'asc',
);
