import Logo from "./extensions/logo.png";
import redirectToCustomHome from "./extensions/redirect-to-custom-home";
// import HomePage from "./extensions/src/pages/HomePage";

export default {
  config: {
    locales: ["en", "pt-BR"], // Add 'pt-BR' to the list of locales
    translations: {
      en: {
        titleTemplate: "Admin Panel",
        "Auth.form.welcome.title": "Welcome to the Admin Panel",
        "Auth.form.welcome.subtitle": "Login to continue",
        "app.components.LeftMenu.navbrand.title": "Admin Panel",
        "global.localeToggle.label": "Language",
        "cloud.plugin.name": "Cloud",
        "Settings.application.strapi-version": " ",
        "Settings.application.edition-title": " ",
        "Settings.application.ee-or-ce": " ",
        "Settings.application.link-pricing": " ",
        "Settings.application.strapiVersion": "System Version",
        "app.components.HomePage.welcomeBlock.content.again":
          "Welcome to the Admin Panel",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in the System. All saved data will be stored in your database.",
      },
      es: {
        titleTemplate: "Panel de Administración",
        "Auth.form.welcome.title": "Bienvenido al Panel de Administración",
        "Auth.form.welcome.subtitle": "Inicia sesión para continuar",
        "app.components.LeftMenu.navbrand.title": "Panel de Administración",
        "global.localeToggle.label": "Idioma",
        "cloud.plugin.name": "Nube",
        "Settings.application.strapi-version": " ",
        "Settings.application.edition-title": " ",
        "Settings.application.ee-or-ce": " ",
        "Settings.application.link-pricing": " ",
        "Settings.application.strapiVersion": "Versión del sistema",
        "app.components.HomePage.welcomeBlock.content.again":
          "Bienvenido al Panel de Administración",
        "Auth.form.register.subtitle":
          "Las credenciales se utilizan solo para autenticarse en el Sistema. Todos los datos guardados se almacenarán en su base de datos.",
      },
      "pt-BR": {
        titleTemplate: "Painel Administrativo",
        "Auth.form.welcome.title": "Bem-vindo ao Painel Administrativo",
        "Auth.form.welcome.subtitle": "Faça login para continuar",
        "app.components.LeftMenu.navbrand.title": "Painel Administrativo",
        "global.localeToggle.label": "Idioma",
        "cloud.plugin.name": "Cloud",
        "Settings.application.strapi-version": " ",
        "Settings.application.edition-title": " ",
        "Settings.application.ee-or-ce": " ",
        "Settings.application.link-pricing": " ",
        "Settings.application.strapiVersion": "Versão do sistema",
        "app.components.HomePage.welcomeBlock.content.again":
          "Bem-vindo ao Painel Administrativo",
        "Auth.form.register.subtitle":
          "As credenciais são usadas apenas para autenticar no Sistema. Todos os dados salvos serão armazenados em seu banco de dados.",
      },
    },
    tutorials: false,
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
  },
  bootstrap(app: any) {
    redirectToCustomHome();
  },
};
