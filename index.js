// index.js

// Photon - A lightweight and versatile platform designed to streamline image processing tasks efficiently.

// Photon functionality
class Photon {
    constructor() {
        this.images = [];
        this.filters = {};
    }

    // Method to upload an image
    uploadImage(imageName, imageData) {
        this.images.push({ name: imageName, data: imageData });
    }

    // Method to apply a filter to an image
    applyFilter(imageName, filterName) {
        if (this.images.find(image => image.name === imageName)) {
            if (!this.filters[imageName]) {
                this.filters[imageName] = [];
            }
            this.filters[imageName].push(filterName);
        } else {
            console.log("Image not found.");
        }
    }

    // Method to display all images and their applied filters
    displayImages() {
        console.log("Images:");
        this.images.forEach(image => {
            console.log(`- ${image.name}`);
            if (this.filters[image.name]) {
                console.log("  Filters:");
                this.filters[image.name].forEach(filter => {
                    console.log(`    - ${filter}`);
                });
            } else {
                console.log("  No filters applied.");
            }
        });
    }
}

// Example usage:
const photonApp = new Photon();

// Uploading images
photonApp.uploadImage("Sunset Landscape", "base64-encoded-image-data");
photonApp.uploadImage("Portrait", "base64-encoded-image-data");

// Applying filters to images
photonApp.applyFilter("Sunset Landscape", "Vintage Effect");
photonApp.applyFilter("Portrait", "Black and White");

// Displaying images and applied filters
photonApp.displayImages();
