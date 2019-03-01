import * as React from 'react';
import styles from './ColumnDefs.module.css';

class DatasetsColDef extends React.Component<any> {
  public render() {
    const datasets = this.props.value;
    return (
      <div>
        {datasets.map((dataset: any, i: number) => {
          return (
            <div style={{ lineHeight: '20px' }} key={i}>
              <div>{dataset.key}</div>
              <div style={{ marginTop: '20px', fontSize: '0.9em' }}>Path:</div>
              <div style={{ fontFamily: 'monospace' }}>{dataset.path}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DatasetsColDef;
