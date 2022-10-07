import { component$ } from '@builder.io/qwik';
import { Field } from '~/components/page/field';
import { Topbar } from '~/components/page/topbar';

export default component$(() => {
  const style = {
  }

  return (
    <div id="main" style={style}>
      <Topbar/>
      <Field/>
    </div>
  );
});
