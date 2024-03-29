const loadData = async (datalimit) => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    dataShow(data.data.tools, datalimit);
}

const loadSpiner = (isLoading) => {
    const getSpiner = document.getElementById('spiner');
    if (isLoading) {
        getSpiner.classList.remove('d-none');

    } else {
        getSpiner.classList.add('d-none');
    }

}
const dataShow = (data, datalimit) => {
    const getseemoreBtn = document.getElementById('seemore-btn');
    if (datalimit && data.length > 4) {
        data = data.slice(0, 5);
        getseemoreBtn.classList.remove('d-none');
    } else {
        getseemoreBtn.classList.add('d-none');

    }


    loadSpiner(true);
    const cardContainer = document.getElementById('card-container');
    data.forEach(data => {
        console.log('%c⧭', 'color: #e50000', data);

        const addNewDiv = document.createElement('div');
        addNewDiv.classList.add('col', 'mt-3');

        addNewDiv.innerHTML = `
    <div class="card" style="width: 20rem;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <p class="container  card-text">
                    <ol class="" type="1">
                        <li>${data.features[0]}</li>
                        <li>${data.features[1]}</li>
                        <li>${data.features[2]}</li>
                    </ol>
                    </p>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">${data.name}</h5>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                    </svg><span class="ms-1">${data.published_in}</span></p>
                            </div>
                            <div class="col">
                                <a onclick="detailsInModal('${data.id}')" href="#" class="float-end" data-bs-toggle="modal" data-bs-target="#modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                        class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    
    `;
        cardContainer.appendChild(addNewDiv);

    });

    loadSpiner(false);

}
document.getElementById('seemore-btn').addEventListener('click', function () {
    loadData();

})

const detailsInModal = async name => {
    const url = 'https://openapi.programming-hero.com/api/ai/tool/${name}';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setDataOnModal(data);

}
const setDataOnModal = (data) => {
    console.log(data);
    const getModalSection = document.getElementById('modal-section');
    const createNewDivInModalSection = document.createElement('div');
    createNewDivInModalSection.innerHTML = `
     <div class=" modal-lg modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <div class="modal-body d-flex flex-row m-5 gap-3">
                            <div class="card rounded-3 border border-danger " style="width: 18rem;">
                                <div class=" bg-danger-subtle card-body">

                            <h1 class="fs-5 text">ChatGPT is a large language model developed by OpenAI that can generate human-like responses in a conversation.</h1>
<div class="card" style="width: 7rem;">
  <div class="card-body">
    <h5 class="text-success fs-6 card-title">10/ month Basic Basic</h5>
  </div>
</div>
                                </div>
                            </div>
                            <div class="rounded-3  card" style="width: 18rem;">
                                <div class="card-body">

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
    
    
    `;
    getModalSection.appendChild(createNewDivInModalSection);

}

loadData(4);
