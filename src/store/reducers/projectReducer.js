const initState = {
  projects: [
    {id: '1', title: 'AGH Solar Boat', content: 'Jesteśmy zespołem składającym się z 63 ambitnych młodych studentów z 8 wydziałów AGH w Krakowie pragnących udowodnić, że razem możemy odnieść sukces. Wierzymy w to, że dzięki zróżnicowanym umiejętnościom oraz wymianie wiedzy jesteśmy w stanie osiągnąć cele pozornie niemożliwe do realizacji. Wyróżnia nas chęć do ciężkiej, ale jakże satysfakcjonującej pracy. Nasze działania opierają się na efektywnej współpracy, kreatywności, odpowiedzialności, a przede wszystkim na dążeniu do osiągnięcia wspólnych celów.'},
    {id: '2', title: 'E-Moto', content: 'To grupa pasjonatów zajmująca się konstruowaniem motocykla z napędem elektrycznym. Zespół tworzą trzy Koła Naukowe: Mechaników, Hydrogenium oraz Spectrum. Projekt koordynowany jest przez KN Mechaników z Wydziału Inżynierii Mechanicznej i Robotyki, które realizuje część mechaniczną, konstrukcję i napęd. KN Hydrogenium z Wydziału Energetyki i Paliw realizuje układ zasilania, z kolei KN Spectrum z Wydziału Informatyki, Elektroniki i Telekomunikacji jest odpowiedzialne za telekomunikację.'},
    {id: '3', title: 'Agilezer', content: 'Aplikacja webowa, która pomoże Ci zrewolucjonizować swoje życie i przejąć kontrolę nad własnym czasem.'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state
    default:
      return state
  }
}

export default projectReducer