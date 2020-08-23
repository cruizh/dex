;;; init.el --- description -*- lexical-binding: t; -*-
;;
;;; Commentary:
;;
;;; Code:

(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

(let ((needed-packages '(ox-twbs)))
  (dolist (pkg needed-packages)
    (unless (package-installed-p pkg)
      (package-install pkg))))

(pushnew org-link-abbrev-alist
         '("github" . "https://github.com/%s"))

;;; init.el ends here
