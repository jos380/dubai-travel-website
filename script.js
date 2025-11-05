/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f9f9f9;
}

/* Header */
header {
    background-color: #004080;
    color: white;
    padding: 20px 0;
    text-align: center;
}

header nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* Sections */
section {
    padding: 40px 20px;
    text-align: center;
}

section h2 {
    color: #004080;
    margin-bottom: 20px;
}

/* Attractions */
.attractions-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.attraction {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.attraction img {
    width: 100%;
    border-radius: 8px;
}

/* Gallery */
.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.gallery figure {
    margin: 0;
    width: 250px;
}

.gallery img {
    width: 100%;
    border-radius: 8px;
}

figcaption {
    margin-top: 5px;
    font-weight: bold;
}

/* Footer */
footer {
    background-color: #004080;
    color: white;
    text-align: center;
    padding: 20px 0;
}
