import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const CallToAction = () => {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <div className=" flex flex-col lg:flex-row gap-4 mt-20">
      <div className="lg:flex-1">
        <h2 className="text-3xl font-medium">
          Take the Leap, Adopt a Pet Friend!
        </h2>

        <p className="mt-2">
          Are you ready to transform a life and open your heart to a furry
          companion? The journey of pet adoption is a heartwarming adventure
          waiting for you. Join us in making a difference and offering a forever
          home to an animal in need.
        </p>

        <h2 className="text-3xl font-medium mt-10">Why Adopt?</h2>

        <p className="mt-2">
          By choosing adoption, you are not just bringing home a pet; you are
          providing a second chance at happiness. Thousands of lovable dogs,
          cats, and other animals are eagerly waiting for someone like you to
          become their hero. They come in all shapes, sizes, and personalities,
          each with a unique story longing for a happy ending
          <button
            onClick={() => handleOpen("lg")}
            className=" ml-2 text-[#f6ab4a]"
          >
            Read More
          </button>
          <Dialog
            open={
              size === "xs" ||
              size === "sm" ||
              size === "md" ||
              size === "lg" ||
              size === "xl" ||
              size === "xxl"
            }
            size={size || "md"}
            handler={handleOpen}
          >
            <DialogHeader>How to Adopt:</DialogHeader>
            <DialogBody>
              <h2 className="font-semibold">Visit a Shelter or Rescue:</h2>
              <p>
                Explore your local animal shelters or rescue organizations. Walk
                through the aisles, spend time with the animals, and let that
                special connection happen.
              </p>
              <h2 className="font-semibold mt-4">Meet Your Match:</h2>
              <p>
                Our dedicated staff will help you find the perfect match based
                on your lifestyle, preferences, and the unique qualities of each
                pet. Whether you are looking for a playful pup or a cuddly cat,
                theres a soulmate waiting for you. Our dedicated staff will help
                you find the perfect match based on your lifestyle, preferences,
                and the unique qualities of each pet. Whether you are looking
                for a playful pup or a cuddly cat, theres a soulmate waiting for
                you.
              </p>
            </DialogBody>
            <DialogFooter>
              <button
                onClick={() => handleOpen(null)}
                className="mr-1 text-red-500"
              >
                <span>Cancel</span>
              </button>
            </DialogFooter>
          </Dialog>
        </p>
      </div>
      <div className="lg:flex-1">
      <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://i.ibb.co/n80YBRK/image.png"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-[#4e2c2c] py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <Typography variant="h5" color="white">
        Ready to Change a Life? Start Your Adoption Journey Today!
        </Typography>
      </figcaption>
    </figure>
      </div>
    </div>
  );
};

export default CallToAction;
