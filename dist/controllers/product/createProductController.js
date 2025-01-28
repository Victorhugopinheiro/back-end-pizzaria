"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const createProductService_1 = require("../../services/product/createProductService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, category_id, description, price } = req.body;
            const functionProduct = new createProductService_1.CreateProductService();
            if (!req.files) {
                throw new Error("Without image");
            }
            else {
                //const {originalname, filename:banner} = req.file
                const file = req.files['file'];
                console.log(file.data);
                const cloudinaryResponse = yield new Promise((resolve, reject) => {
                    cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                        if (error) {
                            reject(error);
                        }
                        resolve(result);
                    }).end(file.data);
                });
                const response = yield functionProduct.execute({ name, category_id, description, price, banner: cloudinaryResponse.url });
                res.json({});
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
