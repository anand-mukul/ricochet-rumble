// Red pieces
const redTank =
	'<div class="piece red" id="tank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,5H4A1,1,0,0,0,3,6v8a1,1,0,0,0,1,1H6v6H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2H18V15h2a1,1,0,0,0,1-1V6A1,1,0,0,0,20,5ZM16,21H8V15h8Zm3-8H5V7H19ZM8,3A1,1,0,0,1,8,1h8a1,1,0,0,1,0,2Z"></path></g></svg></div>';

const redTitan =
	'<div class="piece red" id="titan"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3375 19C5.815 19 5.33219 18.7141 5.07094 18.25C4.80969 17.7859 4.80969 17.2141 5.07094 16.75C5.33219 16.2859 5.815 16 6.3375 16H17.0625C17.8702 16 18.525 16.6716 18.525 17.5C18.525 18.3284 17.8702 19 17.0625 19H6.3375Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.875 8C6.10837 10.228 8.83837 13.569 11.7 8C14.5616 13.569 17.2916 10.228 18.525 8L17.16 16H6.24L4.875 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 8C10.8923 8 10.2375 7.32843 10.2375 6.5C10.2375 5.67157 10.8923 5 11.7 5C12.5078 5 13.1625 5.67157 13.1625 6.5C13.1625 6.89782 13.0085 7.27936 12.7342 7.56066C12.4599 7.84196 12.0879 8 11.7 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.525 8C17.9866 8 17.55 7.55228 17.55 7C17.55 6.44772 17.9866 6 18.525 6C19.0635 6 19.5 6.44772 19.5 7C19.5 7.26522 19.3973 7.51957 19.2145 7.70711C19.0316 7.89464 18.7836 8 18.525 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87502 8C4.33655 8 3.90002 7.55228 3.90002 7C3.90002 6.44772 4.33655 6 4.87502 6C5.4135 6 5.85002 6.44772 5.85002 7C5.85002 7.26522 5.7473 7.51957 5.56445 7.70711C5.38161 7.89464 5.13361 8 4.87502 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>';

const redRicochet =
	'<div class="piece red" id="ricochet"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z" stroke="#222222"></path> <path d="M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z" stroke="#222222"></path> <path d="M15 9L9 15" stroke="#222222"></path> </g></svg></div>';

const redSemiricochet =
	'<div class="piece red" id="semiricochet"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 284.356 284.356" xml:space="preserve"> <g> <path d="M0,284.356h284.356V0L0,284.356z M269.356,269.356H36.213L269.356,36.213V269.356z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </svg></div>';

const redCanon =
	'<div class="piece red" id="canon"><svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path class="st0" d="M305.844,132.859c-3.219-16.797-17.906-28.922-34.984-28.922h-87.297c-17.625,0-32.594,12.891-35.219,30.328 l-10.516,70.172h181.703L305.844,132.859z"></path> <path class="st0" d="M450.313,246.063c-4.625-8.406-10.813-15.313-18.141-20.188c-3.672-2.438-7.609-4.344-11.75-5.656 c-4.141-1.281-8.484-1.984-12.891-1.984h-336c-4.828,0-9.547,0.828-14.016,2.359c-6.719,2.313-12.844,6.219-18.078,11.313 C34.188,237,29.813,243.313,26.5,250.5l-0.188,0.422L0,327.688l17.406,5.969l9.078-26.531h16.578 c-2.203,2.063-4.188,4.375-5.906,6.906c-4.344,6.438-6.906,14.25-6.906,22.594c0,5.516,1.125,10.656,3.188,15.141 c1.516,3.359,3.5,6.391,5.766,9.078c3.391,4.063,7.328,7.438,11.453,10.563c4.141,3.156,8.484,6.063,12.781,9.063l0.125,0.094 l25.781,16.609c11.031,7.109,23.875,10.891,36.984,10.891h227.063c13.109,0,25.953-3.781,36.969-10.875l25.797-16.625l0.125-0.094 c3.813-2.656,7.688-5.266,11.391-8c2.781-2.063,5.484-4.219,8.031-6.594c1.922-1.75,3.734-3.656,5.375-5.719 c2.484-3.094,4.609-6.594,6.109-10.547c1.484-3.953,2.281-8.328,2.281-12.984c0-5.563-1.125-10.906-3.188-15.719 c-2.219-5.281-5.531-9.938-9.625-13.781h25.516l16.453,30.719l16.219-8.688l-44.5-83.047L450.313,246.063z M431.469,345.063 c-0.828,1.844-1.938,3.594-3.438,5.359c-2.203,2.656-5.203,5.297-8.813,8.047c-3.563,2.719-7.719,5.516-12.109,8.578L381.563,383.5 c-8.406,5.438-18.188,8.297-28.172,8.297H126.328c-9.984,0-19.766-2.859-28.172-8.297l-25.531-16.453 c-3.906-2.734-7.625-5.234-10.875-7.641c-2.5-1.844-4.75-3.656-6.656-5.438c-1.438-1.344-2.703-2.656-3.781-4 c-1.594-1.984-2.75-3.938-3.531-6.063c-0.813-2.125-1.25-4.438-1.266-7.281c0-3.344,0.672-6.5,1.891-9.391 c1.844-4.328,4.906-8.047,8.781-10.641c3.875-2.609,8.469-4.125,13.484-4.125h338.391c3.344,0,6.5,0.656,9.375,1.906 c4.313,1.813,8.031,4.906,10.641,8.75c2.609,3.875,4.125,8.469,4.125,13.5C433.188,340,432.563,342.609,431.469,345.063z"></path> <polygon class="st0" points="321.641,168.5 442.031,158.094 442.656,165.297 512,159.313 508.563,119.531 439.219,125.531 439.844,132.719 319.453,143.125 "></polygon> <polygon class="st0" points="132.156,171.531 71.344,171.906 71.344,203.031 126.5,203.031 "></polygon> <path class="st0" d="M134.766,324.375c-15.766,0-28.563,12.781-28.563,28.563S119,381.5,134.766,381.5s28.563-12.781,28.563-28.563 S150.531,324.375,134.766,324.375z"></path> <path class="st0" d="M204.594,324.375c-15.781,0-28.563,12.781-28.563,28.563s12.781,28.563,28.563,28.563 c15.766,0,28.563-12.781,28.563-28.563S220.359,324.375,204.594,324.375z"></path> <path class="st0" d="M274.406,324.375c-15.766,0-28.563,12.781-28.563,28.563s12.797,28.563,28.563,28.563 c15.781,0,28.563-12.781,28.563-28.563S290.188,324.375,274.406,324.375z"></path> <path class="st0" d="M344.234,324.375c-15.766,0-28.563,12.781-28.563,28.563s12.797,28.563,28.563,28.563 s28.563-12.781,28.563-28.563S360,324.375,344.234,324.375z"></path> <path class="st0" d="M70.672,321.313c-8.453,0-15.328,6.844-15.328,15.313c0,8.453,6.875,15.313,15.328,15.313 s15.313-6.859,15.313-15.313C85.984,328.156,79.125,321.313,70.672,321.313z"></path> <path class="st0" d="M411.031,321.313c-8.453,0-15.313,6.844-15.313,15.313c0,8.453,6.859,15.313,15.313,15.313 c8.469,0,15.313-6.859,15.313-15.313C426.344,328.156,419.5,321.313,411.031,321.313z"></path> </g> </g></svg></div>';

// Blue pieces	
const blueTank =
	'<div class="piece blue" id="tank"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,5H4A1,1,0,0,0,3,6v8a1,1,0,0,0,1,1H6v6H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2H18V15h2a1,1,0,0,0,1-1V6A1,1,0,0,0,20,5ZM16,21H8V15h8Zm3-8H5V7H19ZM8,3A1,1,0,0,1,8,1h8a1,1,0,0,1,0,2Z"></path></g></svg></div>';

const blueTitan =
	'<div class="piece blue" id="titan"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3375 19C5.815 19 5.33219 18.7141 5.07094 18.25C4.80969 17.7859 4.80969 17.2141 5.07094 16.75C5.33219 16.2859 5.815 16 6.3375 16H17.0625C17.8702 16 18.525 16.6716 18.525 17.5C18.525 18.3284 17.8702 19 17.0625 19H6.3375Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.875 8C6.10837 10.228 8.83837 13.569 11.7 8C14.5616 13.569 17.2916 10.228 18.525 8L17.16 16H6.24L4.875 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7 8C10.8923 8 10.2375 7.32843 10.2375 6.5C10.2375 5.67157 10.8923 5 11.7 5C12.5078 5 13.1625 5.67157 13.1625 6.5C13.1625 6.89782 13.0085 7.27936 12.7342 7.56066C12.4599 7.84196 12.0879 8 11.7 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.525 8C17.9866 8 17.55 7.55228 17.55 7C17.55 6.44772 17.9866 6 18.525 6C19.0635 6 19.5 6.44772 19.5 7C19.5 7.26522 19.3973 7.51957 19.2145 7.70711C19.0316 7.89464 18.7836 8 18.525 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87502 8C4.33655 8 3.90002 7.55228 3.90002 7C3.90002 6.44772 4.33655 6 4.87502 6C5.4135 6 5.85002 6.44772 5.85002 7C5.85002 7.26522 5.7473 7.51957 5.56445 7.70711C5.38161 7.89464 5.13361 8 4.87502 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>';

const blueRicochet =
	'<div class="piece blue" id="ricochet"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z" stroke="#222222"></path> <path d="M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z" stroke="#222222"></path> <path d="M15 9L9 15" stroke="#222222"></path> </g></svg></div>';

const blueSemiricochet =
	'<div class="piece blue" id="semiricochet"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 284.356 284.356" xml:space="preserve"> <g> <path d="M0,284.356h284.356V0L0,284.356z M269.356,269.356H36.213L269.356,36.213V269.356z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </svg></div>';

const blueCanon =
	'<div class="piece blue" id="canon"><svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path class="st0" d="M305.844,132.859c-3.219-16.797-17.906-28.922-34.984-28.922h-87.297c-17.625,0-32.594,12.891-35.219,30.328 l-10.516,70.172h181.703L305.844,132.859z"></path> <path class="st0" d="M450.313,246.063c-4.625-8.406-10.813-15.313-18.141-20.188c-3.672-2.438-7.609-4.344-11.75-5.656 c-4.141-1.281-8.484-1.984-12.891-1.984h-336c-4.828,0-9.547,0.828-14.016,2.359c-6.719,2.313-12.844,6.219-18.078,11.313 C34.188,237,29.813,243.313,26.5,250.5l-0.188,0.422L0,327.688l17.406,5.969l9.078-26.531h16.578 c-2.203,2.063-4.188,4.375-5.906,6.906c-4.344,6.438-6.906,14.25-6.906,22.594c0,5.516,1.125,10.656,3.188,15.141 c1.516,3.359,3.5,6.391,5.766,9.078c3.391,4.063,7.328,7.438,11.453,10.563c4.141,3.156,8.484,6.063,12.781,9.063l0.125,0.094 l25.781,16.609c11.031,7.109,23.875,10.891,36.984,10.891h227.063c13.109,0,25.953-3.781,36.969-10.875l25.797-16.625l0.125-0.094 c3.813-2.656,7.688-5.266,11.391-8c2.781-2.063,5.484-4.219,8.031-6.594c1.922-1.75,3.734-3.656,5.375-5.719 c2.484-3.094,4.609-6.594,6.109-10.547c1.484-3.953,2.281-8.328,2.281-12.984c0-5.563-1.125-10.906-3.188-15.719 c-2.219-5.281-5.531-9.938-9.625-13.781h25.516l16.453,30.719l16.219-8.688l-44.5-83.047L450.313,246.063z M431.469,345.063 c-0.828,1.844-1.938,3.594-3.438,5.359c-2.203,2.656-5.203,5.297-8.813,8.047c-3.563,2.719-7.719,5.516-12.109,8.578L381.563,383.5 c-8.406,5.438-18.188,8.297-28.172,8.297H126.328c-9.984,0-19.766-2.859-28.172-8.297l-25.531-16.453 c-3.906-2.734-7.625-5.234-10.875-7.641c-2.5-1.844-4.75-3.656-6.656-5.438c-1.438-1.344-2.703-2.656-3.781-4 c-1.594-1.984-2.75-3.938-3.531-6.063c-0.813-2.125-1.25-4.438-1.266-7.281c0-3.344,0.672-6.5,1.891-9.391 c1.844-4.328,4.906-8.047,8.781-10.641c3.875-2.609,8.469-4.125,13.484-4.125h338.391c3.344,0,6.5,0.656,9.375,1.906 c4.313,1.813,8.031,4.906,10.641,8.75c2.609,3.875,4.125,8.469,4.125,13.5C433.188,340,432.563,342.609,431.469,345.063z"></path> <polygon class="st0" points="321.641,168.5 442.031,158.094 442.656,165.297 512,159.313 508.563,119.531 439.219,125.531 439.844,132.719 319.453,143.125 "></polygon> <polygon class="st0" points="132.156,171.531 71.344,171.906 71.344,203.031 126.5,203.031 "></polygon> <path class="st0" d="M134.766,324.375c-15.766,0-28.563,12.781-28.563,28.563S119,381.5,134.766,381.5s28.563-12.781,28.563-28.563 S150.531,324.375,134.766,324.375z"></path> <path class="st0" d="M204.594,324.375c-15.781,0-28.563,12.781-28.563,28.563s12.781,28.563,28.563,28.563 c15.766,0,28.563-12.781,28.563-28.563S220.359,324.375,204.594,324.375z"></path> <path class="st0" d="M274.406,324.375c-15.766,0-28.563,12.781-28.563,28.563s12.797,28.563,28.563,28.563 c15.781,0,28.563-12.781,28.563-28.563S290.188,324.375,274.406,324.375z"></path> <path class="st0" d="M344.234,324.375c-15.766,0-28.563,12.781-28.563,28.563s12.797,28.563,28.563,28.563 s28.563-12.781,28.563-28.563S360,324.375,344.234,324.375z"></path> <path class="st0" d="M70.672,321.313c-8.453,0-15.328,6.844-15.328,15.313c0,8.453,6.875,15.313,15.328,15.313 s15.313-6.859,15.313-15.313C85.984,328.156,79.125,321.313,70.672,321.313z"></path> <path class="st0" d="M411.031,321.313c-8.453,0-15.313,6.844-15.313,15.313c0,8.453,6.859,15.313,15.313,15.313 c8.469,0,15.313-6.859,15.313-15.313C426.344,328.156,419.5,321.313,411.031,321.313z"></path> </g> </g></svg></div>';

// Common pieces	
const bullet =
	'<div class="piece" id="bullet"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" id="bullet"><path d="M24 30c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path></svg></div>';

const rip =
	'<div class="piece" id="rip"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 581.376 581.376" xml:space="preserve"> <g> <g> <path d="M579.971,542.346c-6.732-8.262-13.158-7.344-22.949-3.978c-11.936,3.978-10.1,6.731-15.301-7.956 c-1.836-5.508-8.262-7.345-12.852-3.366c-11.016,10.098-22.951,18.666-34.271,28.458c-0.307-0.612-0.612-0.918-0.918-1.53 c3.365-0.612,6.73-3.06,7.037-7.649c13.465-147.799,108.631-380.052-43.146-490.519c-97.002-70.38-253.674-67.014-334.152,25.704 c-37.026,27.846-64.872,67.932-78.642,119.034c-28.458,105.264-0.918,227.358,36.414,329.868 c-3.978-5.508-8.262-11.017-12.852-16.219c-3.672-4.283-10.098-0.611-10.404,4.284c-0.306,11.017-0.612,22.032-0.612,33.048 c-7.956-6.731-16.218-13.77-21.42-22.949c-1.836-3.366-6.426-4.59-9.792-2.754c-10.404,6.426-30.906,29.682-25.092,43.451 c0.918,2.448,3.366,5.202,6.426,4.896c2.754-0.306,4.284-0.918,6.12-3.061c2.142-2.142,2.142-4.896,0.918-7.037 c1.836-7.038,8.262-15.912,14.076-21.42c8.874,11.016,20.502,19.584,30.906,29.069c4.284,3.979,12.24,1.225,11.934-4.896 c0-10.71-0.306-21.727-0.612-32.437c7.038,7.956,13.77,16.524,21.114,24.174c0.306,0.918,0.918,2.143,1.224,3.061 c2.754,6.731,13.77,4.284,11.322-3.061c-35.19-107.712-65.79-257.04-33.048-364.751c11.322,3.366,22.95,4.59,34.884,5.814 c1.224,11.934,4.284,23.256,5.508,35.19c0.918,7.956,12.852,10.71,14.688,2.142c3.366-14.688,10.098-21.114,18.054-29.07 c3.06,7.956,6.12,16.218,9.792,24.174c1.53,3.366,5.508,3.978,8.568,3.366c12.546-2.142,25.092-8.874,36.414-14.688 c8.568-4.284,0.918-16.83-7.344-12.852c-8.568,3.978-17.136,8.568-26.316,11.322c-3.978-9.792-7.344-19.89-11.628-29.682 c-2.754-5.814-10.098-3.978-13.158,0c-7.038,9.486-13.158,14.688-18.36,21.114c-1.224-5.814-2.448-11.322-3.06-17.136 c-0.306-3.366-2.754-7.038-6.732-6.732c-12.852,0.918-25.398,0.918-37.944-2.142c27.54-79.254,91.494-133.416,216.954-127.296 c30.295,1.53,55.08,8.568,75.276,19.89c-12.852,9.792-19.89,23.256-26.928,37.026c-10.098-4.896-24.48-5.202-28.764,5.814 c-0.918,2.448,0,5.814,1.836,7.65c0.611,0.612,1.224,1.224,1.836,1.836c3.672,3.366,8.874,1.836,11.016-1.53 c0.918,0.612,2.754,0.918,5.508,0.306c0.307,0,0.612,0.306,0.918,0.306c-7.038,12.24-15.605,23.562-30.294,30.6 c-7.038,3.366-3.672,15.3,3.979,14.688c12.24-1.224,24.174-5.202,35.496-10.404c1.529,6.12,3.365,12.24,5.201,18.36 c2.755,8.262,15.912,7.344,15.606-2.142c-0.612-14.382-2.754-39.78-11.628-54.774c6.12-15.606,11.016-29.988,23.256-42.84 c94.248,61.812,78.948,227.052,61.2,357.714c-15.3,0.612-30.601,2.142-45.9,2.448c0-4.59,0-8.874,0.307-13.464 c0-6.732-7.956-9.486-12.853-5.202c-5.813,4.896-12.24,8.874-18.972,12.546c2.754-3.061,5.813-5.814,8.567-8.874 c3.061-3.06,2.448-7.344,0-10.71c-4.283-5.202-20.195-25.398-27.846-11.934c-4.896,8.567,1.836,16.218,8.874,20.502 c-10.403,10.71-19.89,21.42-27.54,34.577c-4.59,7.65,5.508,14.688,11.935,9.181c12.546-11.017,28.458-17.137,42.84-25.704 c0,2.142,0,4.284,0,6.426c0,3.672,3.366,7.344,7.344,7.344c17.748-0.918,34.578-5.508,52.021-8.567 c-5.509,40.086-11.017,76.5-13.465,105.264c-0.918,12.24,17.442,12.546,19.584,0.918c0.918,3.366,5.814,5.508,8.263,1.224 c5.813-10.71,11.934-20.502,19.277-29.682c3.673,15.912,11.322,29.988,18.666,44.676c2.143,4.284,8.263,4.59,11.628,1.53 c10.711-9.792,22.338-18.054,33.354-27.234c3.061,6.732,7.344,12.853,14.689,15.606c2.754,0.918,5.508-0.306,7.344-1.836 c6.73-6.12,14.381-8.262,22.338-6.732C581.5,552.138,582.725,545.407,579.971,542.346z M291.719,38.67 c-33.66-3.366-65.79-0.612-95.166,7.344c77.724-34.884,172.278-31.212,243.271,18.36c-0.918-0.306-2.142-0.612-3.06-0.612 c-10.71,1.836-22.032,3.06-28.458,11.934c-7.65-3.366-16.524-4.59-22.95-9.792c-1.836-1.53-3.979-0.918-5.508,0.306 C356.285,52.134,327.521,42.342,291.719,38.67z M400.043,81.816c2.448,1.224,4.59,2.754,6.427,4.59 c2.447,2.448,6.119,1.53,7.956-0.918c6.426-9.486,18.359-5.814,26.621-12.852c2.755-2.142,1.837-5.202-0.306-6.732 c10.404,7.344,19.89,15.606,29.07,24.786c75.888,76.806,62.118,190.026,41.31,297.738c-5.814,0-11.322,2.143-16.218,5.202 c-7.65,4.896-10.404,7.65-19.278,2.142c-4.59-2.754-9.792,0.918-10.098,5.814c-0.306,7.344-4.59,13.158-8.874,18.972 C471.953,295.098,480.521,152.502,400.043,81.816z M485.724,536.226c-3.366-7.649-5.814-15.912-6.732-24.786 c-0.612-4.896-7.038-9.485-11.016-4.59c-11.017,13.464-19.278,27.54-26.622,43.146c2.754-30.906,7.649-67.015,12.546-105.876 c0.918-0.918,0.918-2.143,0.306-3.366c0-0.612,0-1.224,0.307-1.836c0.611-0.307,0.918-0.918,1.224-1.53 c6.12-10.098,15.912-17.442,20.502-27.54c4.896,1.836,9.792,2.754,14.994,0.918c6.425-2.142,11.321-6.12,17.136-8.874 C499.188,449.323,489.089,495.222,485.724,536.226z"/> <path d="M226.541,374.352c-16.218-7.956-24.174-21.113-39.78-26.622c3.978-6.12,7.038-12.546,8.874-19.89 c2.448-9.792,1.836-19.89,5.508-29.376c1.224-2.754-1.224-6.732-3.978-7.038c-9.18-1.53-17.442-2.142-26.01,2.754 c-6.12,3.366-9.486,9.792-14.076,14.994c-1.53-2.754-6.426-2.754-7.038,0.612c-0.306,2.142-0.306,4.284-0.306,6.426 c-0.306,0.918-0.306,1.836,0,2.448c0.306,10.71,3.366,21.726,5.202,31.824c1.836,10.403,2.142,24.785,8.874,33.048 c2.448,3.06,7.956,1.224,8.568-2.448c1.836-9.18-3.06-19.278-5.508-27.846c-3.06-11.322-5.508-22.95-7.956-34.272 c10.404-7.344,14.688-17.748,28.152-17.442c-4.896,16.219-4.59,31.519-17.748,45.9c-3.978,4.59-1.224,11.322,4.896,11.628 c20.808,1.225,27.846,21.42,46.818,27.234C228.683,388.734,233.273,377.718,226.541,374.352z"/> <path d="M253.775,338.245c-2.448-13.771-4.896-27.234-5.202-41.311c-0.306-5.813-8.874-5.813-9.18,0 c-0.306,13.158,1.224,26.316,2.754,39.475c0.918,7.956,0.306,18.359,3.978,25.397c1.836,3.366,7.344,3.672,9.18,0 C258.671,354.768,255.305,345.588,253.775,338.245z"/> <path d="M305.489,279.492c-2.448-3.672-7.956-4.896-11.322-1.53c-4.284,4.59-7.65,8.874-10.404,13.464 c-0.612-3.06-1.224-6.12-2.142-9.18c-1.224-3.978-7.038-2.448-6.426,1.836c1.224,6.12,2.142,12.546,2.754,18.666 c-7.956,20.808-3.672,43.146,8.262,67.014c3.366,7.344,14.688,2.143,12.853-5.508c-2.143-7.344-3.672-14.382-5.202-21.726 c3.06,3.672,9.18,4.59,11.322-0.612c4.284-9.486,10.098-19.278,11.934-29.682C318.953,300.3,312.222,288.979,305.489,279.492z M302.123,314.376c-2.142,7.649-6.731,14.382-9.18,22.032c-1.225-6.732-2.449-13.465-3.672-20.196 c1.224-7.038,4.59-14.076,9.792-21.114C302.123,300.913,303.959,307.338,302.123,314.376z"/> <path d="M409.529,556.117c-8.568-15.301-24.174-26.011-26.316-44.677c-0.918-7.038-9.792-10.71-14.075-3.672 c-4.284,7.038-9.181,12.853-14.076,18.973c0-0.307,0.306-0.918,0.306-1.225c0.612-6.731-7.956-8.874-12.24-5.202 c-10.403,9.792-21.113,17.442-34.578,22.95c-17.441,7.344-25.704-18.054-30.906-28.151c-2.142-4.284-8.874-4.284-11.016,0 c-5.508,10.403-9.486,22.338-8.568,33.966c-7.65-14.688-18.36-27.54-28.152-41.311c-2.754-4.283-10.098-5.201-12.546,0 l-15.3,30.601c-7.038-10.099-14.688-19.891-20.808-30.601c-3.672-6.426-12.24-3.06-13.158,3.672 c-1.53,14.383-8.874,25.398-18.054,35.496c-4.59-9.792-11.934-18.666-18.972-26.315c-3.672-3.979-9.18-1.53-10.71,2.754 c-4.284,11.628-7.65,23.562-11.934,35.189c-1.53,4.591,5.508,7.65,7.956,3.366c4.284-8.262,7.956-16.523,11.628-24.786 c5.814,7.345,10.71,15.912,12.546,24.48c0.918,5.202,7.956,6.426,11.322,3.06c11.016-11.016,20.196-22.644,25.398-36.107 c6.426,9.18,13.158,18.359,18.972,28.151c2.448,4.59,9.792,4.896,12.24,0c5.202-10.403,10.404-20.502,15.606-30.905 c10.098,14.382,19.89,28.458,27.846,44.369c3.366,6.732,14.076,2.143,12.24-5.201c0-0.307-0.306-0.612-0.306-0.918 c1.836,0.306,3.672-1.225,3.978-3.366c0-0.307,0-0.612,0-1.225c0-0.918-0.306-1.836-0.612-2.142 c-1.224-6.732,1.224-15.606,3.978-23.562c5.202,11.629,12.852,26.622,20.809,25.704c17.136-1.529,31.212-7.649,44.37-16.523 c-1.225,4.896-2.448,9.485-3.061,14.382c0,0,0,0,0,0.306l0,0c0,0.612-0.306,1.225-0.306,1.836 c-0.612,7.038,11.016,10.404,13.77,3.673c6.12-13.771,16.219-24.175,25.398-35.496c5.814,12.852,15.606,22.644,24.174,35.496 C402.186,571.417,414.119,564.684,409.529,556.117z"/> </g> </g> </svg></div>';