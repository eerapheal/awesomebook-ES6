export default  class Datime {
    dateTime = () => {
      dateTime.innerHTML = `
          <h4>${DateTime.now().toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}</h4>
      `;
    };
  }

