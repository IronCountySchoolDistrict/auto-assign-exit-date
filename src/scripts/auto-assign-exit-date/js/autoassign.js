import $ from 'jquery';

export default function() {
  $(() => {
    fetch('/ws/schema/query/org.irondistrict.special-programs.exit-date.get', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(exitDate => {
        if (exitDate.record.length) {
          const exitDateField = $('.psDateWidget').eq(1);
          const lastDay = exitDate.record[0].lastday;
          if (!exitDateField.val()) {
            exitDateField.val(lastDay);
            exitDateField.prop('readonly', 'readonly');
          }
        }
      });
  });
}
