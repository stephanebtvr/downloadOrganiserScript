const fs = require("fs"); // Module pour interagir avec le système de fichiers
const path = require("path"); // Module pour manipuler les chemins de fichiers

const downloadDir = path.join(process.env.HOME, "Downloads");

const folders = {
  Images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  Documents: [".pdf", ".docx", ".txt", ".xlsx", ".pptx"],
  Vidéos: [".mp4", ".avi", ".mkv", ".mov"],
  Musique: [".mp3", ".wav", ".flac"],
  Archives: [".zip", ".rar", ".tar", ".gz"],
  Autres: [],
  Applications: [".dmg", ".iso"],
};

const extensionAutorisees = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".pdf",
  ".docx",
  ".txt",
  ".xlsx",
  ".pptx",
  ".mp4",
  ".avi",
  ".mkv",
  ".mov",
  ".mp3",
  ".wav",
  ".flac",
  ".zip",
  ".rar",
  ".tar",
  ".gz",
  ".dmg",
  ".iso",
];

const organiserRepertoireDownload = () => {
  fs.readdir(downloadDir, (err, files) => {
    if (err) {
      console.log("Erreur de contenu de du dossier Téléchargement");
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(downloadDir, file);
      const isFile = fs.lstatSync(filePath).isFile();
      const ext = path.extname(file).toLowerCase();
      let targetFolder = "Autres";

      if (isFile && ext) {
        for (const [folder, extension] of Object.entries(folders)) {
          if (extension.includes(ext) && extensionAutorisees.includes(ext)) {
            targetFolder = folder;
            break;
          }
        }
      } else if (
        fs.lstatSync(filePath).isDirectory &&
        file !== "Dossiers" &&
        !Object.keys(folders).some((folder) => filePath.includes(folder))
      ) {
        targetFolder = "Dossiers";
      } else {
        return;
      }
      const targetDir = path.join(downloadDir, targetFolder);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
      }
      const newFileDir = path.join(targetDir, file);
      fs.rename(filePath, newFileDir, (err) => {
        if (err) console.error(`Erreur en déplaçant ${file}:`, err);
        else console.info(`✅ ${file} → Dossiers`);
      });
    });
  });
};

organiserRepertoireDownload();
