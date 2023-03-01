<?php
// get file size
if (file_exists("demo.txt")) {
echo "File is " . filesize("demo.txt") . "bytes.";
} else {
echo "Named file does not exist. ";
}
  

// get file path
if (file_exists("demo.txt")) {
    echo "File path: " . realpath("demo.txt");
    } else {
    echo "Named file does not exist. ";
    }


    // get file path info as array
if (file_exists("demo.txt")) {
    print_r(pathinfo("demo.txt"));
    } else {
    echo "Named file does not exist. ";
    }


    // get file information
if (file_exists("demo.txt")) {
    print_r(stat("demo1.txt"));
    } else {
    echo "Named file does not exist. ";
    }


    // get file information
// output: 'File is: readable writable'
if (file_exists("demo.txt")) {
    echo "File is: ";
    // check for readable bit
    if (is_readable("demo.txt")) {
    echo " readable ";
    }
    // check for writable bit
    if (is_writable("demo.txt")) {
    echo " writable ";
    }
    // check for executable bit
    if (is_executable("demo.txt")) {
    echo " executable ";
    }
    } else {
    echo "Named file does not exist. ";
    }

    // test if file or directory
if (file_exists("demo.txt")) {
    if (is_file("demo.txt")) {
    echo "It's a file.";
    }
    else {
    echo "ERROR: File does not exist.";
    }
}
?>