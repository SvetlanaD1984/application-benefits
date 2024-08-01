const applicationForm = document.querySelector(".application-form");
applicationForm.innerHTML = `
 <h1>Заявление на назначение и выплаты единовременного пособия</h1>

    <form action="#">
        <fieldset>
            <legend>Сведения о заявителе</legend>
            <label for="name">Фамилия</label>
            <input id="name" placeholder="Сидоров" autofocus required>
            <br>
            <label for="name">Имя</label>
            <input id="name" placeholder="Андрей" required>
            <br>
            <label for="name">Отчество</label>
            <input id="name" placeholder="Владимирович">
            <br>
            <label for="status">Статус</label>
            <input id="status" type="text" required>
            <br>           
        </fieldset>
        <fieldset>
          <legend>Документ, удостоверяющий личность</legend>
        </fieldset>   `;
