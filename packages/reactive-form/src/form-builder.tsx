/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { ElementType, FunctionComponent } from 'react';
import { InputType, IReactiveField } from './reactive-fields/types';
import { JSONData } from './types';

type FieldMapType<
  TField extends JSONData,
  TFormValues extends JSONData = JSONData
> = Record<
  string,
  // (params: IReactiveField<any>) => JSX.Element
  ElementType<IReactiveField<TField, TFormValues>>
>;

const fieldMap: FieldMapType<any> = {};

// function getField(field: string | ElementType<IReactiveField<any>>) {
function getField<TField extends JSONData, TFormValues extends JSONData>(
  field: string
) {
  // if (!field) return null;
  // if (typeof field === 'string') {
  if (!fieldMap[field]) {
    throw new Error(
      `Field '${field}' not found, did you defined it by FormBuilder.defineComponent?`
    );
  }
  const component = fieldMap[field] as ElementType<
    IReactiveField<TField, TFormValues>
  >;
  return component;
  // }
  // return field;
}

interface IDefineComponent {
  name: InputType;
  component: FunctionComponent<IReactiveField<any>>;
}

const defineWidget = (params: IDefineComponent) => {
  const { name, component: ReactiveField } = params;

  if (fieldMap[name]) throw new Error(`Field "${name}" already defined.`);
  fieldMap[name] = ReactiveField;
};

export default {
  fieldMap,
  defineWidget,
  getField
};
