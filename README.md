# Content Blocker

## Project Description

**Content Blocker** is a browser extension designed to give users control over the web content they are exposed to. It allows users to create a list of strings they want to censor, and when browsing, the extension prevents access to webpages whose URLs contain any of the censored strings.

## Motivation

The primary motivation behind building this project was to help individuals with Autism Spectrum Disorder and obsessive-compulsive tendencies, such as my brother, avoid upsetting or harmful content while browsing the internet. This project also served as an opportunity for me to enhance my skills in web development (HTML, CSS, and Javascript) and to learn how to create a browser extension. I recognized the practicality of browser extensions in improving the online experience and wanted to contribute to web safety.

## Problem Solved

**Content Blocker** addresses the problem of unrestricted access to potentially distressing or harmful online content. By allowing users to specify keywords or strings to censor, it acts as a protective barrier against exposure to such content. This extension aims to create a safer and more controlled browsing environment, particularly for vulnerable individuals.

## Learning Experience

Throughout the development of this web application and browser extension, I gained valuable insights and skills, including:

- **HTML, CSS, and Javascript:** Acquired a strong foundation in web development technologies, enabling the creation of functional and visually appealing interfaces.
- **Documentation Usage:** Learned how to effectively use documentation to find answers to questions and solve coding problems.
- **DOM Manipulation:** Gained proficiency in manipulating the Document Object Model (DOM), allowing for dynamic updates to web content.
- **Chrome DevTools:** Familiarized myself with Chrome DevTools for debugging and optimizing the extension.

## Standout Qualities

**Content Blocker** stands out due to its significant benefits and potential impact:

- **Purposeful:** It serves a noble purpose by preventing users from accessing harmful or distressing content online.
- **Versatile:** While initially conceived with individuals like my brother in mind, it can benefit a broad range of users, including parents looking to protect children from inappropriate content and people looking to avoid distractions while working or studying.
- **Practical:** The extension enhances the browsing experience for users by giving them more control over the content they encounter.

## Features

The key features of **Content Blocker** include:

- **Censor List:** Users can create, read, update, and delete items in the list of strings to censor, following the four fundamental operations of a CRUD application.
- **Dynamic Prioritization:** The extension utilizes Chrome's `declarativeNetRequest` to dynamically prioritize actions when a webpage's URL matches multiple items in the censor list.
- **Blocking and Redirecting:** For each censored string, users can specify whether they want to block access to webpages containing that string or redirect to a safer alternative.

---

This README provides an overview of the **Content Blocker** project, its purpose, motivation, features, and the developer's learning journey.

For support or inquiries, please contact [jonahschottenstein@gmail.com](mailto:jonahschottenstein@gmail.com).
