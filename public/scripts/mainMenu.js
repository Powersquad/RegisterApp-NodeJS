document.addEventListener("DOMContentLoaded", () => {
    getStartTransactionElement().addEventListener("click", displayNotImplemented);
    getViewProductsElement().addEventListener("click", viewProductClick);
    getCreateEmployeeElement().addEventListener("click", createEmployeeClick);
    getSalesReportElement().addEventListener("click", salesReportClick);
    getCashierReportElement().addEventListener("click", cashierReportClick);
    
});

function cashierReportClick() {
    displayError("Functionality has not yet been implemented.");
};

function salesReportClick() {
    displayError("Functionality has not yet been implemented.");
};


function createEmployeeClick() {
    window.location.assign("/employeeDetail");
};


function viewProductClick() {
    window.location.assign("/productListing");
};

function displayNotImplemented() {
    displayError("Functionality has not yet been implemented.");
};

function getStartTransactionElement() {
    return document.getElementById("startTransactionButton");
};

function getViewProductsElement() {
    return document.getElementById("viewProductsElement");
};

function getCreateEmployeeElement() {
    return document.getElementById("createEmployeeButton");
};

function getSalesReportElement() {
    return document.getElementById("salesReportButton");
};

function getCashierReportElement() {
    return document.getElementById("cashierReportButton");
};

