import { ChangeEvent, FC, useState } from "react";
import { useTranslation } from "react-i18next";

import IconImage from "@assets/icons/Image";
import { useUploadUserImageMutation } from "@features/user/userAPI";

import StyledImageUpload from "./styled";

type ImageUploadProps = {
    className?: string;
    initialImage: string;
};

const ImageUpload: FC<ImageUploadProps> = ({ className = "", initialImage }) => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(initialImage);
    const [uploadImage] = useUploadUserImageMutation();

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const response = await uploadImage(formData);

                // Check if response contains 'data' and access 'photo' safely
                if ("data" in response) {
                    const uploadedImageUrl = (response.data as { photo: string }).photo;
                    setSelectedImage(uploadedImageUrl);
                } else {
                    // Handle the error case
                    console.error("Error uploading image:", response.error);
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };

    return (
        <StyledImageUpload className={`${className} BS-image-upload`}>
            {!selectedImage && (
                <div className="BS-image-upload--input flex items-center relative pl-20 cursor-pointer">
                    <IconImage />
                    <span className="BS-image-upload--text ml-10">{t("photo")}</span>
                    <input
                        className="BS-image-upload--input-hidden cursor-pointer"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleImageUpload}
                    />
                </div>
            )}
            {selectedImage && (
                <div className="BS-image-upload--selected">
                    <img src={selectedImage} alt="Selected" className="w100 object-cover" />
                </div>
            )}
        </StyledImageUpload>
    );
};

export default ImageUpload;
