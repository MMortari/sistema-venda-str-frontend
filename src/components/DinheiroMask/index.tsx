import React from 'react';

interface Props {
  children: any,
  prefix?: string,
  decimal?: number,
  chunkDelimiter?: string,
  decimalDelimiter?: string,
}

const DinheiroMask = ({ prefix = "R$", decimal = 2, chunkDelimiter = '.', decimalDelimiter = ',', children }: Props) => {

  let total = "";
  let value = children;

  if (!value) {
    value = 0;
  }

  const result = '\\d(?=(\\d{3})+' + (decimal > 0 ? '\\D' : '$') + ')';
  const num = value.toFixed(Math.max(0, ~~decimal));

  total = prefix + ' ' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);

  return (
    <>
      { total }
    </>
  )
}

export default DinheiroMask;