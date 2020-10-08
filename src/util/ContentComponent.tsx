import React from 'react';

type ContentComponentProps = {
  content?: React.ReactElement
  children?: React.ReactElement
};

export function withContent<P extends ContentComponentProps>(WrappedComponent: React.ComponentType<P>) {
  const WithContentComponent = (props: React.ComponentType<P>) => {
    return <WrappedComponent {...props} />;
  };
  return WithContentComponent;
}