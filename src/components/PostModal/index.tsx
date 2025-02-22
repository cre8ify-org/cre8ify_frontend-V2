"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Button";
import { Textarea } from "../Textarea";
import Image from "next/image";
import { CREATIFI_SVG } from "@/assets/svg";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PostModal({ isOpen, onClose }: PostModalProps) {
  const [postText, setPostText] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[#00000082] flex items-center justify-center p-4 z-50 w-full h-screen"
          onClick={(e: any) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1], // custom easing function
            }}
            className="bg-[#191919] rounded-2xl w-full max-w-2xl p-4 space-y-4 relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Image
                    src="/images/Frame 30139.png"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  //   variant="outline"
                  className="bg-gradient1 border-0 transition-colors px-4 py-[5px] rounded"
                >
                  <p className="bg-gradient text-transparent bg-clip-text">
                    everyone
                  </p>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <Textarea
                placeholder="Whats on your mind?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="min-h-[100px] bg-transparent border-0 text-gray-200 text-lg placeholder:text-gray-400 resize-none focus-visible:ring-0"
                autoFocus
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between pt-2"
            >
              <div className="flex gap-4">
                {[
                  { Icon: () => CREATIFI_SVG().imageIcon(), delay: 0.25 },
                  { Icon: () => CREATIFI_SVG().recordIcon(), delay: 0.3 },
                  { Icon: () => CREATIFI_SVG().audioIcon(), delay: 0.35 },
                ].map(({ Icon, delay }, index) => (
                  <motion.button
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay }}
                    className="text-emerald-500 hover:text-emerald-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.button>
                ))}
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="px-6 py-3 rounded-full bg-gradient text-midnight_black">
                    Post
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
