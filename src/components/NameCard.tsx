import * as React from 'react';

export interface INameCardProps { name: string; age: number; }

export class NameCard extends React.Component<INameCardProps, {}> {
  public render() {
    return (
      <div className="NameCard">
        <p className="Name">Name: {this.props.name}</p>
        <p className="Age">Age: {this.props.age}</p>
      </div>
    );
  }
}
