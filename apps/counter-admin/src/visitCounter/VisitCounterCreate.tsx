import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const VisitCounterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
      </SimpleForm>
    </Create>
  );
};
