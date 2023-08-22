class SettingServicesPage {
  elements = {
    input_email_username: () =>
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your email or username']"
      ),
    input_password: () =>
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your password']"
      ),
    buttonSubmit: () =>
      cy.get('div[class="relative mt-20"] span button[type="submit"]'),
    settings_sidebar: () =>
      cy.get(
        'div[class="flex flex-col mr-8"] div[class="w-124 text-tiny leading-16.8"]'
      ),
    services_card: () =>
      cy.get(
        'div[class="flex flex-col pl-20"] div[class="text-h5 leading-p font-bold text-alfred-lightBlue-100"]'
      ),
    add_btn: () => cy.get('span button[type="button"]'),
    select_service_type_drpdwn: () =>
      cy.get(
        'div[class="relative font-normal"] div svg[data-icon="fasAlfredArrowDown"]'
      ),
    send_from_address: () =>
      cy.get(
        'div[class="w-full flex items-center cursor-pointer break-words undefined"] div[class="flex items-center space-x-8"] div'
      ),
    selected_send_from_address: () => cy.get('div[class="h-full"]'),
    order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
    sub_myOrders: () =>
      cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
    manual_add: () =>
      cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
    selfdrop_off_services_card: () =>
      cy.get(
        'div[class="w-full h-full flex items-stretch p-20 rounded-8 listing-drop-shadow cursor-pointer bg-alfred-white-100"]'
      ),
    location_and_logistics: () =>
      cy.get(
        'div[class="pt-10 pl-16 pr-8 pb-14 text-tiny leading-16.8 cursor-pointer text-alfred-black-60 hover:text-alfred-lightBlue2-100"]'
      ),
    location_type: () =>
      cy.get(
        'div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"] '
      ),
    search_locationType: () => cy.get('input[placeholder="Search..."]'),
    clickSendFromAddress: () =>
      cy.get('div[class="flex items-center space-x-8"] div'),
    setLocationType_sendFromAddress: () =>
      cy.get(
        'div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"]'
      ),
    details_service_setting: () => cy.get("a div[width: 187px;]"),
    details_location_type: () =>
      cy.get(
        'div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"]'
      ),
    verify_sendFromAddress: () =>
      cy.get('div[class="flex items-center space-x-8"] div'),
    add_btn_location_type: () =>
      cy.get(
        'div span button[type="button"] div[class="flex justify-center items-center"] div'
      ),
  };
}
module.exports = new SettingServicesPage();
