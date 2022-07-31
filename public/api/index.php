<?php

const TARGET_SCAN = "../../data";

$list = scandir(TARGET_SCAN);
unset($list[0], $list[1]);
$list = array_values($list);
$currentPageUrl = 'http://' . $_SERVER["HTTP_HOST"] . '/api/';

header("Content-Type: application/json");
foreach ($list as &$v) {
        $v = explode(".", $v);
        if ($v > 1) {
                unset($v[count($v) - 1]);
        }
        $v = $currentPageUrl.implode(".", $v).".php";
}
echo json_encode($list, JSON_UNESCAPED_SLASHES);